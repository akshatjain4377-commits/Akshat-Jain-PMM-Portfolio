import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

type FunnelStage = 'discover' | 'evaluate' | 'connect';
type VisualMode = 'journey' | 'reading';

interface ThreeDFunnelSceneProps {
  activeStage: FunnelStage;
}

const STAGES: FunnelStage[] = ['discover', 'evaluate', 'connect'];
const PORTALS = [
  { stage: 'discover' as FunnelStage, z: 3, width: 9.2, height: 5.5 },
  { stage: 'evaluate' as FunnelStage, z: -11, width: 6.6, height: 4.25 },
  { stage: 'connect' as FunnelStage, z: -25, width: 4.1, height: 3.15 },
];
const SECTIONS = [
  { z: 7, width: 10.4, height: 6.2 },
  { z: 3, width: 9.2, height: 5.5 },
  { z: -11, width: 6.6, height: 4.25 },
  { z: -25, width: 4.1, height: 3.15 },
  { z: -37, width: 2.7, height: 2.2 },
];

function makeQuad(points: THREE.Vector3[], material: THREE.Material) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(points.flatMap((point) => [point.x, point.y, point.z]), 3),
  );
  geometry.setIndex([0, 1, 2, 0, 2, 3]);
  geometry.computeVertexNormals();
  return new THREE.Mesh(geometry, material);
}

function addRail(group: THREE.Group, points: THREE.Vector3[], material: THREE.Material, radius = 0.025) {
  const curve = new THREE.CatmullRomCurve3(points);
  const geometry = new THREE.TubeGeometry(curve, Math.max(40, points.length * 5), radius, 5, false);
  const mesh = new THREE.Mesh(geometry, material);
  group.add(mesh);
}

function createPortal(
  group: THREE.Group,
  portal: (typeof PORTALS)[number],
  material: THREE.MeshStandardMaterial,
) {
  const frame = new THREE.Group();
  frame.position.z = portal.z;
  const thickness = portal.stage === 'connect' ? 0.16 : 0.12;
  const depth = 0.24;
  const bars = [
    { geometry: new THREE.BoxGeometry(portal.width * 2 + thickness, thickness, depth), x: 0, y: portal.height },
    { geometry: new THREE.BoxGeometry(portal.width * 2 + thickness, thickness, depth), x: 0, y: -portal.height },
    { geometry: new THREE.BoxGeometry(thickness, portal.height * 2, depth), x: -portal.width, y: 0 },
    { geometry: new THREE.BoxGeometry(thickness, portal.height * 2, depth), x: portal.width, y: 0 },
  ];

  for (const bar of bars) {
    const mesh = new THREE.Mesh(bar.geometry, material);
    mesh.position.set(bar.x, bar.y, 0);
    frame.add(mesh);
  }

  const cornerGeometry = new THREE.SphereGeometry(thickness * 0.85, 12, 8);
  for (const x of [-portal.width, portal.width]) {
    for (const y of [-portal.height, portal.height]) {
      const corner = new THREE.Mesh(cornerGeometry, material);
      corner.position.set(x, y, depth * 0.58);
      frame.add(corner);
    }
  }

  frame.userData.stage = portal.stage;
  group.add(frame);
}

function getMode(): VisualMode {
  return document.documentElement.dataset.mode === 'reading' ? 'reading' : 'journey';
}

export default function ThreeDFunnelScene({ activeStage }: ThreeDFunnelSceneProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const activeStageRef = useRef<FunnelStage>(activeStage);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    activeStageRef.current = activeStage;
  }, [activeStage]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    } catch {
      setFallback(true);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(host.clientWidth || window.innerWidth, host.clientHeight || window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.setAttribute('aria-hidden', 'true');
    renderer.domElement.className = 'funnel-3d-scene__canvas';
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 150);
    camera.position.set(0, 1.4, 10);
    camera.lookAt(0, 0, -1);

    scene.add(new THREE.HemisphereLight(0xf7f5ec, 0x4a6354, 2.0));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.3);
    keyLight.position.set(-6, 10, 8);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0xb7c6bd, 14, 40, 2);
    rimLight.position.set(5, 3, -13);
    scene.add(rimLight);
    const endLight = new THREE.PointLight(0xdfe9dd, 8, 25, 2);
    endLight.position.set(0, 0, -31);
    scene.add(endLight);

    const world = new THREE.Group();
    scene.add(world);

    const wallMaterial = new THREE.MeshStandardMaterial({
      color: 0xb7c6bd, roughness: 0.88, metalness: 0.02,
      side: THREE.DoubleSide, transparent: true, opacity: 0.18, depthWrite: false,
    });
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0xdfe6dc, roughness: 0.92, metalness: 0.02,
      side: THREE.DoubleSide, transparent: true, opacity: 0.34, depthWrite: false,
    });
    const ceilingMaterial = new THREE.MeshStandardMaterial({
      color: 0xe4e9e3, roughness: 0.95, side: THREE.DoubleSide,
      transparent: true, opacity: 0.07, depthWrite: false,
    });
    const gridMaterial = new THREE.LineBasicMaterial({ color: 0x9faf9f, transparent: true, opacity: 0.42 });
    const railMaterial = new THREE.MeshStandardMaterial({
      color: 0x9caf9d, roughness: 0.45, metalness: 0.12,
      emissive: 0x344f44, emissiveIntensity: 0.08,
    });
    const portalMaterials = PORTALS.map(() => new THREE.MeshStandardMaterial({
      color: 0xb7c6bd, roughness: 0.38, metalness: 0.12,
      emissive: 0x344f44, emissiveIntensity: 0.1,
    }));
    const markerMaterial = new THREE.MeshStandardMaterial({
      color: 0x344f44, emissive: 0x344f44, emissiveIntensity: 1.2,
      roughness: 0.2, metalness: 0.05,
    });

    const sectionAt = (z: number) => {
      for (let i = 0; i < SECTIONS.length - 1; i += 1) {
        const near = SECTIONS[i];
        const far = SECTIONS[i + 1];
        if (z <= near.z && z >= far.z) {
          const t = (near.z - z) / (near.z - far.z);
          return {
            width: THREE.MathUtils.lerp(near.width, far.width, t),
            height: THREE.MathUtils.lerp(near.height, far.height, t),
          };
        }
      }
      const end = SECTIONS[SECTIONS.length - 1];
      return { width: end.width, height: end.height };
    };

    for (let i = 0; i < SECTIONS.length - 1; i += 1) {
      const near = SECTIONS[i];
      const far = SECTIONS[i + 1];

      world.add(makeQuad([
        new THREE.Vector3(-near.width, -near.height, near.z),
        new THREE.Vector3(-far.width, -far.height, far.z),
        new THREE.Vector3(-far.width, far.height, far.z),
        new THREE.Vector3(-near.width, near.height, near.z),
      ], wallMaterial));
      world.add(makeQuad([
        new THREE.Vector3(near.width, -near.height, near.z),
        new THREE.Vector3(near.width, near.height, near.z),
        new THREE.Vector3(far.width, far.height, far.z),
        new THREE.Vector3(far.width, -far.height, far.z),
      ], wallMaterial));
      world.add(makeQuad([
        new THREE.Vector3(-near.width, -near.height, near.z),
        new THREE.Vector3(near.width, -near.height, near.z),
        new THREE.Vector3(far.width, -far.height, far.z),
        new THREE.Vector3(-far.width, -far.height, far.z),
      ], floorMaterial));
      world.add(makeQuad([
        new THREE.Vector3(-near.width, near.height, near.z),
        new THREE.Vector3(-far.width, far.height, far.z),
        new THREE.Vector3(far.width, far.height, far.z),
        new THREE.Vector3(near.width, near.height, near.z),
      ], ceilingMaterial));
    }

    const leftRailPoints: THREE.Vector3[] = [];
    const rightRailPoints: THREE.Vector3[] = [];
    const leftCeilingPoints: THREE.Vector3[] = [];
    const rightCeilingPoints: THREE.Vector3[] = [];
    for (let i = 0; i <= 60; i += 1) {
      const z = 7 - (44 * i) / 60;
      const shape = sectionAt(z);
      leftRailPoints.push(new THREE.Vector3(-shape.width, -shape.height + 0.06, z));
      rightRailPoints.push(new THREE.Vector3(shape.width, -shape.height + 0.06, z));
      leftCeilingPoints.push(new THREE.Vector3(-shape.width, shape.height - 0.04, z));
      rightCeilingPoints.push(new THREE.Vector3(shape.width, shape.height - 0.04, z));
    }
    addRail(world, leftRailPoints, railMaterial, 0.028);
    addRail(world, rightRailPoints, railMaterial, 0.028);
    addRail(world, leftCeilingPoints, railMaterial, 0.018);
    addRail(world, rightCeilingPoints, railMaterial, 0.018);

    const gridPositions: number[] = [];
    for (let i = 0; i <= 46; i += 1) {
      const z = 7 - (44 * i) / 46;
      const shape = sectionAt(z);
      gridPositions.push(-shape.width, -shape.height + 0.035, z, shape.width, -shape.height + 0.035, z);
    }
    for (let line = -5; line <= 5; line += 1) {
      const points: THREE.Vector3[] = [];
      const ratio = line / 5;
      for (let i = 0; i <= 46; i += 1) {
        const z = 7 - (44 * i) / 46;
        const shape = sectionAt(z);
        points.push(new THREE.Vector3(shape.width * ratio, -shape.height + 0.04, z));
      }
      world.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), gridMaterial));
    }
    const gridGeometry = new THREE.BufferGeometry();
    gridGeometry.setAttribute('position', new THREE.Float32BufferAttribute(gridPositions, 3));
    world.add(new THREE.LineSegments(gridGeometry, gridMaterial));

    PORTALS.forEach((portal, index) => createPortal(world, portal, portalMaterials[index]));

    const marker = new THREE.Group();
    marker.add(new THREE.Mesh(new THREE.SphereGeometry(0.26, 24, 18), markerMaterial));
    const haloMaterial = new THREE.MeshBasicMaterial({ color: 0x344f44, transparent: true, opacity: 0.72 });
    const halo = new THREE.Mesh(new THREE.TorusGeometry(0.52, 0.018, 8, 56), haloMaterial);
    marker.add(halo);
    const haloVertical = new THREE.Mesh(
      new THREE.TorusGeometry(0.52, 0.018, 8, 56),
      haloMaterial.clone(),
    );
    haloVertical.rotation.x = Math.PI / 2;
    marker.add(haloVertical);
    const beaconLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -1.9, 0), new THREE.Vector3(0, 1.9, 0)]),
      new THREE.LineBasicMaterial({ color: 0x344f44, transparent: true, opacity: 0.3 }),
    );
    marker.add(beaconLine);
    world.add(marker);

    let mode: VisualMode = getMode();
    let progress = 0;
    let activeIndex = Math.max(0, STAGES.indexOf(activeStageRef.current));
    let targetCameraX = 0;
    let targetCameraY = 1.25;
    let currentCameraX = 0;
    let currentCameraY = 1.25;
    let running = true;
    let inView = true;
    let frame = 0;

    const updateMaterials = () => {
      const reading = mode === 'reading';
      keyLight.intensity = reading ? 1.1 : 2.3;
      rimLight.intensity = reading ? 3.4 : 14;
      endLight.intensity = reading ? 2.8 : 8;
      wallMaterial.color.set(reading ? 0x314136 : 0xb7c6bd);
      wallMaterial.opacity = reading ? 0.11 : 0.18;
      floorMaterial.color.set(reading ? 0x202a23 : 0xdfe6dc);
      floorMaterial.opacity = reading ? 0.2 : 0.34;
      ceilingMaterial.color.set(reading ? 0x19211c : 0xe4e9e3);
      ceilingMaterial.opacity = reading ? 0.035 : 0.07;
      gridMaterial.color.set(reading ? 0x667568 : 0x9faf9f);
      gridMaterial.opacity = reading ? 0.24 : 0.42;
      railMaterial.color.set(reading ? 0x526657 : 0x9caf9d);
      railMaterial.emissive.set(reading ? 0x19211c : 0x344f44);
      markerMaterial.color.set(reading ? 0xafc6b3 : 0x344f44);
      markerMaterial.emissive.set(reading ? 0xafc6b3 : 0x344f44);
      haloMaterial.color.set(reading ? 0xafc6b3 : 0x344f44);
      (haloVertical.material as THREE.MeshBasicMaterial).color.set(reading ? 0xafc6b3 : 0x344f44);
      (beaconLine.material as THREE.LineBasicMaterial).color.set(reading ? 0xafc6b3 : 0x344f44);
      portalMaterials.forEach((material, index) => {
        const readingColors = [0x536b58, 0x6f8872, 0xafc6b3];
        const journeyColors = [0xb7c6bd, 0x9fb6a4, 0x344f44];
        const color = reading ? readingColors[index] : journeyColors[index];
        material.color.set(color);
        material.emissive.set(color);
        material.emissiveIntensity = index === activeIndex ? (reading ? 0.24 : 0.65) : (reading ? 0.025 : 0.09);
      });
    };

    updateMaterials();

    const updateScroll = () => {
      const container = host.closest<HTMLElement>('.funnel-journey');
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight * 0.85);
      progress = THREE.MathUtils.clamp((window.innerHeight * 0.18 - rect.top) / travel, 0, 1);
    };

    const onPointerMove = (event: PointerEvent) => {
      targetCameraX = (event.clientX / Math.max(1, window.innerWidth) - 0.5) * 0.42;
      targetCameraY = 1.25 + (event.clientY / Math.max(1, window.innerHeight) - 0.5) * -0.22;
    };

    const onThemeMutation = () => {
      const nextMode = getMode();
      if (nextMode === mode) return;
      mode = nextMode;
      updateMaterials();
    };
    const themeObserver = new MutationObserver(onThemeMutation);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-mode'] });

    const intersectionObserver = new IntersectionObserver((entries) => {
      inView = entries.some((entry) => entry.isIntersecting);
    }, { threshold: 0 });
    const container = host.closest<HTMLElement>('.funnel-journey');
    if (container) intersectionObserver.observe(container);

    const resize = () => {
      if (!host.clientWidth || !host.clientHeight) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(host.clientWidth, host.clientHeight);
      camera.aspect = host.clientWidth / host.clientHeight;
      camera.updateProjectionMatrix();
    };

    const render = () => {
      if (!running) return;
      frame = window.requestAnimationFrame(render);
      if (!inView) return;
      updateScroll();
      activeIndex = Math.max(0, STAGES.indexOf(activeStageRef.current));
      const reading = mode === 'reading';
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const cameraProgress = progress * (reading || reduced ? 0.78 : 1);
      const desiredZ = 10 - cameraProgress * 28;
      const follow = reduced ? 0.24 : reading ? 0.045 : 0.075;
      currentCameraX += (targetCameraX - currentCameraX) * follow;
      currentCameraY += (targetCameraY - currentCameraY) * follow;
      camera.position.set(currentCameraX, currentCameraY, desiredZ);
      camera.lookAt(currentCameraX * 0.32, 0, desiredZ - 11.5);

      marker.position.set(0, 0.02 + Math.sin(progress * Math.PI * 2) * 0.12, 2 - progress * 27);
      marker.rotation.z = Math.sin(progress * Math.PI * 2) * 0.08;
      marker.scale.setScalar(reading ? 0.85 : 1);

      portalMaterials.forEach((material, index) => {
        const isActive = index === activeIndex;
        material.emissiveIntensity = isActive ? (reading ? 0.24 : 0.65) : (reading ? 0.025 : 0.09);
      });

      renderer.render(scene, camera);
    };

    updateScroll();
    resize();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    render();

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      themeObserver.disconnect();
      intersectionObserver.disconnect();
      world.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.LineSegments) {
          object.geometry.dispose();
          const material = object.material;
          if (Array.isArray(material)) material.forEach((item) => item.dispose());
          else material.dispose();
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  useEffect(() => {
    activeStageRef.current = activeStage;
  }, [activeStage]);

  return (
    <div ref={hostRef} className={`funnel-3d-scene ${fallback ? 'funnel-3d-scene--fallback' : ''}`} aria-hidden="true">
      <div className="funnel-3d-scene__fallback" />
    </div>
  );
}
