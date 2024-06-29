export interface Participants {
  [participantID: string]: string;
}

export interface Poll {
  id: string;
  topic: string;
  votesPerVoter: string;
  participants: Participants;
  adminID: string;
}
