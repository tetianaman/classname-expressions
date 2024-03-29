import styles from './App.module.scss';
import { NewComponent } from './components/new-component/new-component';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <NewComponent />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className={styles['App-link']}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
