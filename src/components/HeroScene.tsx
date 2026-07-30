import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const YELLOW = "#F3C400";
const BLUE = "#0B4F8A";
const BRIGHT_BLUE = "#087AC1";
const DEEP = "#0A2A4A";

type BoxDatum = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
  offset: number;
  color: string;
  wire: boolean;
};

function Containers({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const boxes = useMemo<BoxDatum[]>(() => {
    const colors = [YELLOW, BLUE, BRIGHT_BLUE, DEEP];
    return new Array(10).fill(0).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 8.5 + 1.2,
        (Math.random() - 0.5) * 4.5,
        (Math.random() - 0.5) * 3.5,
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * 0.3],
      scale: 0.55 + Math.random() * 0.85,
      speed: 0.25 + Math.random() * 0.45,
      offset: Math.random() * Math.PI * 2,
      color: colors[i % colors.length],
      wire: i % 4 === 0,
    }));
  }, []);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.getElapsedTime();

    if (!reduced) {
      g.rotation.y += delta * 0.045;
      g.children.forEach((child, i) => {
        const d = boxes[i];
        if (!d) return;
        child.position.y = d.position[1] + Math.sin(t * d.speed + d.offset) * 0.4;
        child.position.x = d.position[0] + Math.cos(t * d.speed * 0.6 + d.offset) * 0.15;
        child.rotation.x += delta * 0.08 * (i % 2 === 0 ? 1 : -1);
        child.rotation.z += delta * 0.03;
      });
      g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, pointer.current.y * 0.12, 0.03);
      g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, -pointer.current.x * 0.06, 0.03);
    }
  });

  return (
    <group ref={group}>
      {boxes.map((b, i) => (
        <mesh key={i} position={b.position} rotation={b.rotation} scale={b.scale}>
          <boxGeometry args={[1, 0.62, 0.62]} />
          {b.wire ? (
            <meshBasicMaterial color={b.color} wireframe transparent opacity={0.55} />
          ) : (
            <meshPhysicalMaterial
              color={b.color}
              metalness={0.35}
              roughness={0.3}
              transparent
              opacity={0.88}
              clearcoat={0.4}
            />
          )}
        </mesh>
      ))}
    </group>
  );
}

function ParticleField({ reduced }: { reduced: boolean }) {
  const points = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const count = 140;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (reduced || !points.current) return;
    points.current.rotation.y += delta * 0.012;
    const posAttr = points.current.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < posAttr.count; i++) {
      const y = posAttr.getY(i) + delta * 0.06;
      posAttr.setY(i, y > 4.5 ? -4.5 : y);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial color="#ffffff" size={0.028} transparent opacity={0.45} sizeAttenuation />
    </points>
  );
}

export default function HeroScene({ reduced = false }: { reduced?: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 8], fov: 42 }}
      frameloop={reduced ? "demand" : "always"}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.55} color="#dce8f5" />
      <directionalLight position={[4, 5, 5]} intensity={1.3} color="#F3C400" />
      <directionalLight position={[-5, -3, 2]} intensity={0.5} color="#087AC1" />
      <Containers reduced={reduced} />
      <ParticleField reduced={reduced} />
      <fog attach="fog" args={["#071B32", 6, 15]} />
    </Canvas>
  );
}
