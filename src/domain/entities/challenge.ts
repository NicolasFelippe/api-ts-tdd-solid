import { Entity } from "../../core/domain/Entity";

type ChallengeProps = {
  title: string;
  instructionUrl: string;
  createdAt?: Date;
}

export class Challenge extends Entity<ChallengeProps>{

  private constructor(props: ChallengeProps, id?: string) {
    super(props, id);
  }

  static create(props: ChallengeProps, id?: string) {
    return new Challenge({
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }, id)
  }
}