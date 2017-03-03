// 载入模板
import './index.html'

// 载入样式
import './index.css'

// 载入框架
import dva from 'dva'

// 载入loading组件
import createLoading from 'dva-loading'

// 1. Initialize
const app = dva()

// 2. Plugins
app.use(createLoading())

// 3. Model
app.model(require('./models/app'))
app.model(require('./models/users'))
app.model(require('./models/auth'))
app.model(require('./models/role'))
app.model(require('./models/goods'))
app.model(require('./models/orders'))
app.model(require('./models/adsense'))
app.model(require('./models/activity'))
app.model(require('./models/brands'))
app.model(require('./models/types'))
app.model(require('./models/finance'))

// 4. Router
app.router(require('./router'))

// 5. Start
app.start('#root')
