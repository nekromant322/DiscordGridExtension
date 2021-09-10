
const currentHostname = new URL(window.location.href).hostname;

console.log('Hostname [' + currentHostname + ']');

if (currentHostname === 'www.twitch.tv') {
    console.log('Running script on twitch');

    let ariaLabelText = 'Claim Bonus';
    let buttonHintText = 'Click to claim a bonus!';

    if (document.documentElement.lang === 'ru-RU') {
        ariaLabelText = 'Получить бонус';
        buttonHintText = 'Щелкните, чтобы получить бонус!';
    }

    setInterval(
        function(){
            const buttonList = document.querySelectorAll(
                'section div.chat-input div.chat-input__buttons-container div.community-points-summary button[aria-label="' + ariaLabelText + '"]'
            );

            if (buttonList.length > 0) {
                if (buttonList.length === 1) {
                    const buttonGetBonus = buttonList[0];
                    const buttonHint = buttonGetBonus.nextElementSibling;

                    if (buttonHint) {
                        if (buttonHint.textContent === buttonHintText) {
                            buttonGetBonus.click();
                            console.log('Clicked');
                        } else {
                            console.error('Invalid hint text: [' + buttonHint.textContent + ']');
                        }
                    } else {
                        console.error('No button hint');
                    }
                } else {
                    console.error('Too much buttons [' + buttonList.length + ']');
                }
            } else {
                console.log('Not Found');
            }
        },
        10000
    );
} else {
    console.log('No script for this site');
}
