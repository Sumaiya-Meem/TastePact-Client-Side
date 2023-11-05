export const fadeIn=(dir,delay)=>{
    return{
        hidden:{
            y:dir === 'up'? 80: dir === 'down' ? -80 : 0,
            opacity:0,
            x:dir==='left' ? 80 : dir === 'right' ? -80: 0,
        },
        show:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type:'tween',
                duration:1.2,
                delay:delay,
                ease:[0.25,0.25,0.75,1],
            },
        },
    };

};