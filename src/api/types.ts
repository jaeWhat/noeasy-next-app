export type Menu = {
	id: string;
	menuGrp: string;
	menuCode: string;
	menuName?: string;
	sortSeq?: number;
	useYn: boolean;
}
export type Code = {
	id: string;
	codeGrp: string;
	code: string;
	codeName?: string;
	sortSeq?: number;
	useYn: boolean;
}
export type PrtfMst = {
	id: string;
	prtfGrp?: string;
	prtfCode?: string;
	prtfName?: string;
	cycleType?: string;
	cycleInterval?: number;
	startTime?: string;
	cycleTime?: string;
	sortSeq?: number;
	useYn: boolean;
}
export type PrtfDtl = {
	id: string;
	prtfId: string;
	assetCode?: string;
	assetName?: string;
	assetRate?: number;
	sortSeq?: number;
	useYn: boolean;
}
