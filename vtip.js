const vtipy = [
    "Proč vědci nedůvěřují atomům? Protože tvoří všechno!",
    "Rovnoběžné čáry mají toho tolik společného... Je škoda, že se nikdy nepotkají.",
    "Řekl jsem své ženě, že si kreslí obočí moc vysoko. Vypadala překvapeně.",
    "Co dělá osa na pláži? Vlny.",
    "Včera jsem měl sen, že jím obrovskou plechovku tuny, co to znamená? Probudil jsem se s těžkým kovovým ochutnávkou.",
    "Proč se draci nezúčastňují soutěží v létání? Protože jsou vždy letadla.",
    "Co dělá matematik, když se nudí? Snaží se najít výstup.",
    "Kolik programátorů je potřeba k výměně žárovky? Žádný, to je problém hardware.",
    "Jaký je nejoblíbenější kód programátora? Kód, který funguje.",
    "Vím vtip o UDP, ale nevím, jestli ho pochopíte.",
    "Co se stane, když zakopete o kabel? Uzavřete okno.",
    "Jak říká programátor svému dítěti? 'Pojmenuju tě Y2K.'",
    "Proč děti programátorů často vyhrávají ve skákání na laně? Dobře znají bitový skok.",
    "Jaký je nejlepší způsob uložení informace? Zapsat si ji do paměti RAM.",
    "Proč nemůže assembler pracovat ve správném pořádku? Protože nemá žádný stack.",
    "Co je nejoblíbenějším jídlem programátora? Byty.",
    "Proč programátoři nemají klíče? Protože ztratili svůj pointer.",
    "Proč se čajáci stále dívají do monitoru? Protože tam mají těch šálků kávy.",
    "Co dělá programátor, když mu zima? Přepne se na vytápění.",
    "Jaký je nejrychlejší způsob přenosu peněz? '1234567890'.",
    "Co udělá programátor, když ho tlačí za krkem? Ctrl+Alt+Del.",
    "Proč se vtipálek učil Javascript? Chtěl mít lepší 'punchline'.",
    "Proč programátoři nemohou pracovat venku? Kvůli virům.",
    "Jaký je oblíbený druh hudby programátorů? 'Rap'",
    "Co udělá programátor, když ho chceš potrestat? Dáš mu práci bez internetu.",
    "Jaká je oblíbená zvířata programátorů? 'Myši' a 'Krysy'",
    "Proč programátoři nemají rádi denní světlo? Ztratili ho někde v kódu.",
    "Jaký je nejlepší způsob získání soukromí na internetu? Použít 'alt+F4'.",
    "Proč se programátoři nebojí vodopádů? Vědí, že jejich kód je suchý.",
    "Kolik programátorů je potřeba k výměně žárovky? Žádný, to je problém uživatele.",
    "Proč programátoři nejí čipky? Mají rádi jen bitové.",
    "Jaký je oblíbený film programátorů? 'Matrix'.",
];

const vtipContainer = document.querySelector('.vtip-container');
const generujButton = document.getElementById('generuj-button');
const vtipText = document.getElementById('vtip-text');

function zobrazNahodnyVtip() {
    const nahodnyIndex = Math.floor(Math.random() * vtipy.length);
    const nahodnyVtip = vtipy[nahodnyIndex];
    vtipText.textContent = nahodnyVtip;
}

generujButton.addEventListener('click', zobrazNahodnyVtip);
