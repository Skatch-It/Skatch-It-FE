export interface LoginProps {
    loginfrag: boolean;
    checkNickname: () => void;
    setNickname: (nickname: string) => void;
    showWarning?: boolean;
    setShowWarning?: (ShowWaring: boolean) => void;
}