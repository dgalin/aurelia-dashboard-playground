export class ChildRouter{
  heading = 'Our Tools';

  configureRouter(config, router){
    config.map([
      { route: ['','welcome'],  name: 'welcome',       moduleId: 'welcome',       nav: true, title:'Welcome' },
      { route: 'users',         name: 'users',         moduleId: 'users',         nav: true, title:'Github Users' },
      { route: 'backtest',        name: 'backtest',       moduleId: 'backtest',       nav: true, title:'Hedge Backtest' },
    ]);

    this.router = router;
  }
}
