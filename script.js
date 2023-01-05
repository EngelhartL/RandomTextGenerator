
let finalMessage = [];


const randomNumber = () => {

    return Math.floor(Math.random() * 6);

}


const luck = ['lucky.', 'unlucky.', 'horrible.', 'amazing.', 'funny.', 'crazy.'];

const events = ['great sex.', 'rich.', 'kidnaped by aliens.', 'a new girlfriend.', 'a great gift.', 'a new job.'];

const resolutions = ['Setting and achieving personal and professional goals.', 'Improving physical and mental well-being.',
'Cultivating positive relationships with others.', 'Developing new skills and knowledge.', 'Finding ways to give back to your community.',
'Being patient and kind to yourself.'];



finalMessage.push('The new Year will be ' + luck[randomNumber()]);
finalMessage.push('You will get ' + events[randomNumber()]);
finalMessage.push('You should work on ' + resolutions[randomNumber()]);

console.log(finalMessage.join('\n'));
