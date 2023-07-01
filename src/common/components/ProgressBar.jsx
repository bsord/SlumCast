export const ProgressBar = (props) => {
    const { valuePercentage: value, ref } = props;
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
                background: '#000000DD',
            }}
        >
            <div style={{
                    height: '1.5vw',
                    background: '#dfdfe7',
                    overflow: 'hidden',
                    flex: fillerFlex,
                    transition: "all 500ms ease-in"
                    }}
            >
                <div style={{ 
                        width: `${fillerRelativePercentage}%`,
                        height: 'inherit',
                        background: 'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,85,0,1) 20%, rgba(255,166,0,1) 50%, rgba(254,255,0,1) 80%, rgba(255,255,255,1) 100%)',
                    }}
                >
                    
                </div>

            </div>
            <div style={{
                color: 'white',
                fontSize: '1.5vw',
                marginLeft: '.25vw',
                position: 'absolute',
                left: 0,
                lineHeight: 1,
                }}
            >
                {`${value}`}
            </div>
      </div>
    );
  };