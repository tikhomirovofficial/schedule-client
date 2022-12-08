import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="container ml-auto f-center-col h-100v">
          <div className="w-100p shedule flex-col-betw">
              <header className="flex-row-betw">
                <div className="header__logo d-f al-center gap-20">
                    <img src="img/logo.jpg" alt=""/>
                    <p className="header__text">
                        Череповецкий
                        Лесомеханический
                        техникум
                    </p>
                </div>
                <div className="header__things d-f al-center gap-30">
                    <div className="header__thing-item d-f al-center">
                        <div className="emodji"></div>
                        <p>Some text</p>
                    </div>
                    <div className="header__thing-item d-f al-center">
                        <div className="emodji"></div>
                        <p>Some text</p>
                    </div>
                    <div className="header__thing-item d-f al-center">
                        <div className="emodji"></div>
                        <p>Some text</p>
                    </div>
                    <div className="header__thing-item d-f al-center">
                        <div className="emodji"></div>
                        <p>Some text</p>
                    </div>
                </div>
              </header>
              <div className="shedule__content">
                  <div className="shedule__header w-100p flex-row-betw">
                    <div className="shedule__header-left d-f al-center">
                        <div className="shedule__header-item shedule__header-item-choosed">
                            1 Курс
                        </div>
                        <div className="shedule__header-item">
                            1 Курс
                        </div>
                        <div className="shedule__header-item">
                            1 Курс
                        </div>
                        <div className="shedule__header-item">
                            1 Курс
                        </div>
                    </div>
                    <div className="shedule__header-right d-f al-center">
                        <div className="shedule__header-item shedule__header-item-choosed">
                            а
                        </div>
                        <div className="shedule__header-item">
                            а
                        </div>
                        <div className="shedule__header-item">
                            а
                        </div>
                        <div className="shedule__header-item">
                            а
                        </div>
                        <div className="shedule__header-item">
                            а
                        </div>
                        <div className="shedule__header-item">
                            а
                        </div>
                    </div>
                  </div>
              </div>
              <div className="shedule__updated f-center-row">
                  <p>
                      обновлено 03.12.2022 9:57
                  </p>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
