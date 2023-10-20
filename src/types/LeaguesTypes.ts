export type TStage = {
  Sid: number;
  Scd: string;
  Sdn: string;
  Sds: string;
  Shi: number;
  Scu: number;
  CompId: string;
  CompN: string;
  CompD: string;
  CompST: string;
  badgeUrl: string;
  firstColor: string;
};

export type TLeagues = {
  Ccd: string;
  Chi: number;
  Cid: string;
  Cnm: string;
  Csnm: string;
  Stages: TStage[];
};
