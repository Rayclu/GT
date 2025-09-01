import React, { Component } from 'react';
// import styles from './cards.module.css';
type cardProps = {
  role: string,
  name: string,
  contacts: string[],
  photo: string | undefined,
  etc?: string[]
}


class PresentationCard extends Component<cardProps> {
  render(): React.ReactNode {
      const { role, name, contacts, photo} = this.props;
      return (
        <>
          <body>
            <div className="container" id='card'>
              <div id="photo">
                <img src={photo} alt={`Yo soy ${name}`} />
              </div>
              <div id="name">
                <p>Bienvenidop a mi carta de presentacion, yo soy {name} {"\n"}</p>
              </div>
              <div id="role">
                <p>
                   Mi rol es  {role}
                </p>
              </div>
              <div id="contacts">
                <p>
                  Puedes contactarme por cualquiera de mis redes, te las dejo aqui {
                  <>
                    <ul>
                      {
                        contacts.map((c, i ) => (
                          <li key={i}> {c}</li>
                        ))
                      }
                    </ul>
                  </>
                  }
                </p>
              </div>
            </div>
          </body>
        </>
      );
  };
};

export default PresentationCard;
