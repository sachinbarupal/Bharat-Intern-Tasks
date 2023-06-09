        var cel = document.getElementById("cel");
        var fah = document.getElementById("fah");
        var kel = document.getElementById("kel");
        var btn = document.getElementById("btn");

        function roundOff(number){
            if(!Number.isInteger(number)){
                number = number.toFixed(4);
                return number;
            }
            return number;
        }

        cel.addEventListener('input', function(){
            let c = parseFloat(cel.value);
            let f = (c*9/5)+32;
            let k = (c)+273.15;

            fah.value = roundOff(f);
            kel.value = roundOff(k);
        });
        
        fah.addEventListener('input', function(){
            let f = parseFloat(fah.value);
            let c = (f-32)*5/9;
            let k = c + 273.15;

            cel.value = roundOff(c);
            kel.value = roundOff(k);
        });

        kel.addEventListener('input', function(){
            let k = parseFloat(kel.value);
            let c = k - 273.15;
            let f = (c*9/5) + 32;

            cel.value = roundOff(c);
            fah.value = roundOff(f);
        });

        btn.addEventListener('click',()=>{
            cel.value = "0";
            fah.value = "32";
            kel.value = "273.15";
        });