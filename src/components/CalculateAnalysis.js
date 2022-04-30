

export default function CalculateAnalysis() {
return (
    
    function myFunction() {
        const sumStrength = document.getElementById("inputStrength").value;
        const sumWeakness = document.getElementById("inputWeakness").value;
        const sumOpportunity = document.getElementById("inputOpportunity").value;
        const sumThreat = document.getElementById("inputThreat").value;
        const total = +sumStrength + +sumOpportunity + +sumWeakness + +sumThreat;
        document.getElementById("totalPrice").innerHTML = total;
        
    }
    
);  
}


