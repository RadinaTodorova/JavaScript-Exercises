function theatrePromotions(day, age) {
    pricePerTicket = 0;
if (age >= 0 && age <= 18) {
    if (day == 'Weekday') {
pricePerTicket = 12;
    } else if (day == 'Weekend') {
        pricePerTicket = 15;
    } else if (day == 'Holiday') {
        pricePerTicket = 5;
    }
    console.log(`${pricePerTicket}$`);
} else if (age <= 64 && age > 18) {
    if (day == 'Weekday') {
pricePerTicket = 18;
    } else if (day == 'Weekend') {
        pricePerTicket = 20;
    } else if (day == 'Holiday') {
        pricePerTicket = 12;
    }
    console.log(`${pricePerTicket}$`);
} else if (age > 64 && age <= 122) {
    if (day == 'Weekday') {
pricePerTicket = 12;
    } else if (day == 'Weekend') {
        pricePerTicket = 15;
    } else if (day == 'Holiday') {
        pricePerTicket = 10;
    } 
    console.log(`${pricePerTicket}$`);
} else {
    pricePerTicket = 'Error!';
    console.log(pricePerTicket)
    
}

}

theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 15);