interface HeaderProps {
    title: string;
    subtitle: string;
    buttonText: string;
    onButtonClick: () => void;
}

export function Header({ title, subtitle, buttonText, onButtonClick }: HeaderProps) {
    return (
        <header>
            <div className="bg-primary pt-8 pb-11 md:[clip-path:ellipse(50%_100%_at_50%_0%)] flex flex-col items-center">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    
                    <h1 className="text-xl md:text-4xl font-bold text-light-text leading-tight">
                        {title}
                    </h1>
                    
                    <h2 className="text-l md:text-2xl mt-5 md:mt-7 text-light-text ">
                        {subtitle}
                    </h2>

                    <div className="flex justify-center mt-5">
                        <button 
                            className="px-8 py-3 bg-[#EBA844] hover:bg-[#d49f4c] cursor-pointer text-light-text  font-bold rounded-lg text-lg transition-colors"
                        >
                            {buttonText}
                        </button>
                    </div>
                    
                </div>
            </div>
        </header>
    );
}