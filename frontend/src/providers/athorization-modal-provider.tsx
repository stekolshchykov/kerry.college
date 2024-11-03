import React, {createContext, ReactNode, useContext, useState} from 'react';

interface AuthorizationModalContextType {
    isShow: boolean;
    showModal: () => void;
    hideModal: () => void;
}

const AuthorizationModalContext = createContext<AuthorizationModalContextType | undefined>(undefined);

export function useAuthorizationModal() {
    const context = useContext(AuthorizationModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}

export function AuthorizationModalProvider({children}: { children: ReactNode }) {
    const [isShow, setIsShow] = useState<boolean>(false);

    const showModal = () => setIsShow(true);
    const hideModal = () => setIsShow(false);

    return (
        <AuthorizationModalContext.Provider value={{isShow, showModal, hideModal}}>
            {children && <div>{children}</div>}
        </AuthorizationModalContext.Provider>
    );
}
