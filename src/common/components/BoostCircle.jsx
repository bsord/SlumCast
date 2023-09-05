export const BoostCircle = (props) => {
    const { valuePercentage: value, color } = props;
    const trimmedValue = value*.75
    const radius = 90
    const circumference = Math.PI*(radius*2);
    const percent = ((100-trimmedValue)/100)*circumference;

    return (
        <>
        <svg viewBox="0 0 200 200" style={{width: "10vw", height: "10vw", position: 'absolute', top: 0, left: 0, transform: `rotate(90deg)`}} >
            <circle
                r={radius} cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0" stroke="#55555566" strokeWidth={'1em'}>
            </circle>
            <circle
                r={radius} cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset={percent} stroke={color} strokeWidth={'1em'}
                style={{transition: `stroke-dashoffset 1s ease-in-out`}}
            >
            </circle>
            
      </svg>
      <div style={{position: 'absolute', top: 0, left: 0, width: "10vw", height: "10vw", fontSize: '6vw'}} className="p-0 m-auto text-center"><span>{value}</span></div>
      </>
    );
  };