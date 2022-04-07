declare type InitialState = {
    url: string | null;
    state: 'new' | 'connexion' | 'connected' | 'disconnected' | 'close';
    activeSpeakerId: string | null;
    statsPeerId: string | null;
    faceDetection: boolean;
};
declare const room: (state: InitialState, action: any) => any;
export default room;
//# sourceMappingURL=room.d.ts.map