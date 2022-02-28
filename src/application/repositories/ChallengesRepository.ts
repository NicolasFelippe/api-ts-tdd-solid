import { Student } from "../../domain/entities/student";
import { Challenge } from './../../domain/entities/challenge';

export interface ChallengesRepository{
  findById(id: string): Promise<Challenge | null>;
}