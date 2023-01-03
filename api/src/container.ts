import { container, DependencyContainer, instanceCachingFactory, Lifecycle } from 'tsyringe'
import App from './app'
import { IController } from './interfaces/IController'
import ICompetitionsService from './interfaces/ICompetitionsService'
import ICompetitionsFacade from './interfaces/ICompetitionsFacade'
import CompetitionsController from './controllers/CompetitionsController'
import CompetitionsService from './services/CompetitionsService'


class Config {

}

container.register(App, { useClass: App })

container.register(Config,
  {
    useFactory: instanceCachingFactory<Config>(() => {
      return {}
    })
  })

container.register<IController>('IController', { useClass: CompetitionsController }, { lifecycle: Lifecycle.Singleton })

container.register('ICompetitionsService', { useClass: CompetitionsService }, { lifecycle: Lifecycle.Singleton })

// container.register('ICompetitionsFacade', { useClass: CompetitionsFacade }, { lifecycle: Lifecycle.Singleton })

// container.register('competitionsInvoker', { useValue: invokerContainer(CompetitionsFacade) })

export default container
