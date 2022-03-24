declare type InitialState = {
    url: string | null;
    state: 'nouveau' | 'connexion' | 'connecte' | 'deconnecte' | 'ferme';
    activeSpeakerId: string | null;
    statsPeerId: string | null;
    faceDetection: boolean;
};
declare const room: (state: InitialState, action: any) => any;
export default room;
//# sourceMappingURL=room.d.ts.map