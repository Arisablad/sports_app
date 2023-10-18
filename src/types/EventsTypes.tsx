export interface TEvent {
    Eid: string;
    Pids: { [key: string]: string };
    Sids: { [key: string]: string };
    seriesInfo: {
        totalLegs: number;
        currentLeg: number;
        aggScoreTeam1: number;
        aggScoreTeam2: number;
    };
    T1: TTeam[];
    T2: TTeam[];
    Eps: string;
    Esid: number;
    Epr: number;
    Ecov: number;
    Ern: number;
    ErnInf: string;
    Awt: number;
    Et: number;
    Esd: number;
    LuUT: number;
    Eact: number;
    EO: number;
    EOX: number;
    IncsX: number;
    ComX: number;
    LuX: number;
    StatX: number;
    SubsX: number;
    SDFowX: number;
    SDInnX: number;
    LuC: number;
    Ehid: number;
    Spid: number;
    Stg: {
        Sid: string;
        Snm: string;
        Scd: string;
        Cid: string;
        Cnm: string;
        Csnm: string;
        Ccd: string;
        CompId: string;
        CompN: string;
        CompD: string;
        Scu: number;
        Sds: string;
        Chi: number;
        Shi: number;
        Ccdiso: string;
        Sdn: string;
    };
    Pid: number;
}

export interface TTeam {
    Nm: string;
    ID: string;
    Img: string;
    Abr: string;
    tbd: number;
    Gd: number;
    Pids: { [key: string]: string | string[] };
    CoNm: string;
    CoId: string;
    HasVideo: boolean;
    NewsTag?: string;
}

export interface TEventObject {
    Sid: string;
    Snm: string;
    Scd: string;
    Cid: string;
    Cnm: string;
    Csnm: string;
    Ccd: string;
    CompId: string;
    CompN: string;
    CompD: string;
    Scu: number;
    Sds: string;
    Chi: number;
    Shi: number;
    Ccdiso: string;
    Sdn: string;
    Events: TEvent[];
}