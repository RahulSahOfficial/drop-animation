// Variable Colors 
setInterval(()=>{
    colorCnt=(colorCnt+10)%360;
},200)

//Function to update color of pixel (div)
function updateColor(i,j,colorCnt,opacity){
    divGrid[i*n+j].style.backgroundColor=`hsla(${colorCnt},80%,60%,${opacity})`;
}

function startAnimation(){
    play=setInterval(()=>{
        //updating grid
        for(var i=m-1;i>=1;i--){
            for(var j=0;j<n;j++)
                grid[i][j]=grid[i-1][j];
        }
        // If pixel coloerd on 1st live decreasing its value 
        for(var i=0;i<n;i++){
            if(grid[1][i]>0){
                grid[0][i]=grid[1][i]-1/dropLen;
            }
        }
        //generating new droplets
        for(var i=0;i<n;i++){
            const rand=Math.floor(Math.random()*100/dropProb);
            if(rand==0){
                grid[0][i]=1;
            }
        }
        //rendering
        for(var i=0;i<m;i++){
            for(var j=0;j<n;j++){
                if(grid[i][j]>0)
                    updateColor(i,j,colorCnt,grid[i][j]);
                else
                    divGrid[i*n+j].style.backgroundColor=`hsla(0,0%,0%,1)`;
            }
        }
        // console.table(grid);
    },dropSpeed)
}