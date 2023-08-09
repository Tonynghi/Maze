import { Object3D, PerspectiveCamera, Vector2, Vector3 } from 'three';

export class ThirdPersonCamera {
  camera: PerspectiveCamera;

  target: Vector3;

  direction: Vector3;

  sensitivity: Vector2;

  radius: number;

  theta: number;

  phi: number;

  constructor({
    camera,
    sensitivityX = 0.16,
    sensitivityY = sensitivityX * 0.74,
    phi = 0,
    theta = 0,
    normalRadius = 3.16,
  }: {
    camera: PerspectiveCamera;
    sensitivityX?: number;
    sensitivityY?: number;
    phi?: number;
    theta?: number;
    normalRadius?: number;
  }) {
    this.camera = camera;
    this.sensitivity = new Vector2(sensitivityX, sensitivityY);
    this.theta = theta;
    this.phi = phi;
    this.target = new Vector3();
    this.direction = new Vector3();
    this.radius = normalRadius;
  }

  move(deltaX: number, deltaY: number) {
    this.theta -= deltaX * (this.sensitivity.x / 2);
    this.theta %= 360;
    this.phi += deltaY * (this.sensitivity.y / 2);
    this.phi = Math.min(74, Math.max(-28, this.phi));
  }

  update(target: Object3D) {
    target.getWorldPosition(this.target);
    this.target.y += 0.74;

    this.updateCameraPosition();
    this.camera.updateMatrix();
    this.camera.lookAt(this.target);
    this.direction.subVectors(this.target, this.camera.position).normalize();
  }

  private updateCameraPosition() {
    const theta = (this.theta * Math.PI) / 180;
    const phi = (this.phi * Math.PI) / 180;
    const x = this.target.x + this.radius * Math.sin(theta) * Math.cos(phi);
    const y = this.target.y + this.radius * Math.sin(phi);
    const z = this.target.z + this.radius * Math.cos(theta) * Math.cos(phi);
    this.camera.position.x = x;
    this.camera.position.y = y;
    this.camera.position.z = z;
  }
}
