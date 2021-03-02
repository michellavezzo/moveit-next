import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
    const contextData = useContext(challengesContext);    
    const hasActiveChallenge = true;

    console.log(contextData);

    return(
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive} > 
                    <header> Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg"  />   
                        <strong> Novo desafio </strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>

                    <footer>
                        <button  
                        type="button"
                        className={styles.challengeFailedButton}    
                        >
                            Falhei
                        </button>
                        <button  
                        type="button"
                        className={styles.challengeSucceededButton}    
                        >
                            Completei
                        </button>
                    </footer>
                
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>
                    Finalize um ciclo para receber um desafio
                </strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level UP!"/>
                    Avance de level completando os deafios    
                </p>
                </div> 
            ) }                 
        </div>
    )
}

// 28:00
//https://www.youtube.com/watch?v=ArqCBqN7zzc&feature=emb_title