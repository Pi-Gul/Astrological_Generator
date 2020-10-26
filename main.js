function Random_Number_Generator (range) {
    return Math.floor(Math.random() * range);
} 

function Random_Sign_Generator (arrayOfSigns) {
    return arrayOfSigns[Random_Number_Generator(arrayOfSigns.length)];
}

function Random_Description_Generator (arrayOfDescription) {
    return arrayOfDescription[Random_Number_Generator(arrayOfDescription.length)];
}

const arrayOfSigns = ['Capricorn', 'Aquarius', 'Pisces', 'Aries',
                      'Taurus', 'Gemini', 'Leo','Virgo', 'Libra', 
                      'Scorpio', 'Ophiuchus', 'Sagittarius'];


const arrayOfDescription = ['Feel free to speak your mind at will -- just remember to do it nicely',
                            'Silliness is in order for the day. Go ahead, play tag at the office. Who is it?',
                            'Being tight with a buck is a good thing right now. You have got a bigger goal in mind.',
                            'Feel like your secret self is ready to start kicking butt and taking names? Good!', 
                            'You have tamed that ferocious leonine nature of yours. It looks good on you!', 
                            'No one can get a plan in place like you. Go ahead and set things up just right.',
                            'You have got the magic touch. You excel at creating beauty wherever you go.',
                            'This is well within your reach. So go ahead and keep stretching toward the stars.',
                            'You and you-know-who might be slightly out of step. Do not worry; keep marching.',
                            'Deal with some issues at hand. So put on your gloves and get started.',
                            'Try to be here now! Reminisce away, but do not drown in memories of the past.',
                            'If you can dream it, it is possible. It you can plan it, it is probable. Go for it.'];

console.log(arrayOfDescription);