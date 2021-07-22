function vv(){
	var call = parseFloat(document.getElementById("n1").value);
    var sms = parseFloat(document.getElementById("n2").value);
    var cprice = 0.00;
    var sprice = 0.00;
    if(call <= 50)
        cprice = 0.5 * call;
    else if(call <= 100)
        cprice = 25 + (0.7 * (call - 50));
    else if(call <= 300)
        cprice = 95 + (0.85 * (call - 150));
    else
        cprice = 222.5 + (0.95 * (call - 300));

    if(sms <= 50)
        sprice = 0.00;
    else if(sms <= 200)
        sprice = 0.25 * (sms - 50);
    else if(sms <= 400)
        sprice = 37.5 + (0.4 * (sms - 200));
    else
        sprice = 117.5 + (0.45 * (sms - 400));

    alert("Charges for call: "+ cprice +"\nCharges for SMS: "+ sprice +"\nTotal Charges: "+ (cprice+sprice));
  
	
	
}