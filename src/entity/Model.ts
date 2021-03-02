import {
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
} from "typeorm";

export abstract class Model extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  uuid: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(model?: Partial<any>) {
    super();
    Object.assign(this, model);
  }

  toJSON() {
    return { ...this, id: undefined };
  }
}
