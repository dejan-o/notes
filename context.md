### React Context
- React Context updatovan u verziji 16 postaje popularan 
- Sluzi nam da prosledimo state u vise komponenata niz stablo bez prop drilinga 

-----------

### React Props vs Context
- Props
    State se salje od parenta komponente direktno ka child komponenti, ne mozemo preskociti nivo u stablu

- Context
    State se salje od parent komponente ka bilo kojoj komponenti koja se nalazi unutar nje. 

Img 1.

Context je samo nacin prosledjivanja podataka, nije state management tool

------------

### Kreiranje Context Objekta

Postoje 2 nacina kreiranja kontekst objekta:

- setovanjem default vrednosti 
    React.createContext('english');

- pomocu Provider komopnente koja se Automatski dodeljuje kontektsu kada je kreiran
    <LanguageContext.Provider value={this.state.language}>
        {children}
    </LanguageContext.Provider>

Img 2 (in progress code)

-------------

### Konzumiranje Context Objekta (State)

- kontekst mozemo konzumirati pomocu Consumer komponente koja je automatski dodeljena kontektsu kada je kreiran takodje

- ili pomocu this.context sintakse
    
Postoji znacajna razlika izmedju ova 2 nacina u pisanju i funkcionalnosti

Img (code)

--------------

### Default value

- ako kontekst nema Provider komponentu, defaultnu vrednost ne mozemo nikada promeniti

- komponenta ne mora biti wrapovana u renderu, da bi koristila Context ali ce uzimati samo default vrednost

Img (code)

--------------

### Provider

- provider je komponenta konteksta

- ima 1 prop value koji ce biti state za unutrasnje komopnente

- kad god se updatuje value, provider i njegovi potomci ce biti rerenderovani

Img (code)

IMG (draw io, Lifecycle)

---------------

### Razliciti konteksti istog providera

- ako u kodu imamo 2 Providera istog konteksta, kreirace se 2 odvojena konteksta

- promena prvog konteksta na update event nece se odraziti na drugi kontekst

<LanguageContext.Provider value={this.state.language}>
    {children}
</LanguageContext.Provider>

<LanguageContext.Provider value="defaultEnglish">
    {children}
</LanguageContext.Provider>

IMG (draw.io i Code)

-----------------

### Koonzumiranje konteksta

- ako konzumiramo kontekst sa this.context sintkasom mozemo konzumirati samo 1 kontekst, takodje mozemo konzumirati kontekst koji nije wrapovao komponentu
    static contextType = LanguageContext; // u okviru komponente
    render() {
    const text = this.context === 'english' ? 'Name' : 'Naam';

- ako konzumiramo sa consumerom, mozemo konzumirati vise konteksta, kontekst se konzumira tako sto se u okviru konzumer komponente kao child, dodeli funkcija sa parametrom state
i u okviru nje izvrsi render
    <LanguageContext.Consumer>
        {value => this.renderSubmit(value)}
    </LanguageContext.Consumer>

- Consumer moze imati samo 1 child i to je funkcija

IMG (code)

------------- 


### UseContext Hook

- konzumiranje koneksta u funkcionallnim komponentama pomocu hookova je znatno olaksano 
sintaksa:

const { list, removeListItem, toggleIsDone } = useContext(ListContext);

### Context Vs Redux

Redux:
- single centralizovan state
- deli state sa komponentama bez prop drilinga
- ima mehanizam za update state-a
- veoma dobra dokumentacija
- poznati paterni
- veliki broj biblioteka za laksi radi (neki od su: saga, reselect, debbuging middlewares...) 

Context:
- nije potrebna extra biblioteka 
- deli state sa kompoentama bez prop drilinga

### Zakljucak

React context nije state management tool, vec nacin prosledjivanja podataka.
React is presentation layer.
many to many relationship.

- trebalo bi ga koristiti za state management samo za proste aplikacije, gde nije potreban debbug, nema async koda, nema backend state-a.
- za Front-end state, kreiranje reusable formi, i18n i slicno.


### reusable forms primer