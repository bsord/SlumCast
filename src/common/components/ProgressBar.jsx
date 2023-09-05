export const ProgressBar = (props) => {
    const { valuePercentage: value, ref, color } = props;
    const fillerRelativePercentage = (100 / value) * 100;
    const fillerFlex = value > 0 ? value / 100 : 0;


    return (
        <div
            ref={ref}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={value}
            style={{
                display: 'flex',
                borderRadius: 'inherit',
                background: '#FFFFFF88',
            }}
        >
            <div style={{
                    height: '.5vw',
                    background: '#000',
                    overflow: 'hidden',
                    flex: fillerFlex,
                    transition: "all 500ms ease-in"
                    }}
            >
                <div style={{ 
                        width: `${fillerRelativePercentage}%`,
                        height: 'inherit',
                        background: color,
                    }}
                >
                    
                </div>

            </div>
            
      </div>
    );
  };