function Gradient({children}) {
    return (
        <>
            <div className="header bg-gradient-info py-7 py-lg-8">
                {children}
                <div className="separator separator-bottom separator-skew zindex-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="fill-default"
                            points="2560 0 2560 100 0 100"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
}

export  default Gradient;