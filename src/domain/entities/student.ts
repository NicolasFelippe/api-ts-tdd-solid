import { Entity } from "../../core/domain/Entity";

type StudentProps = {
  name: string;
  email: string;
  createdAt?: Date;
}

export class Student extends Entity<StudentProps>{

  private constructor(props: StudentProps, id?: string) {
    super(props, id);
  }

  static create(props: StudentProps, id?: string) {
    return new Student({
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }, id)
  }
}