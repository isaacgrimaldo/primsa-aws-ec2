/* eslint-disable no-console */
import { startServer } from './main'
import { router } from './modules'

const app = startServer({ router })

app.listen(app.get('port'), () => {
  console.log('App routes: ')

  router.stack.forEach((e) => console.log(e.route.path))

  console.log(`Server running at http://localhost:${app.get('port')}/`)
})
