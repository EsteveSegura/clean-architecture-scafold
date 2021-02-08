import sanitize from 'sanitize-html'
import buildMakeUser from './user.entity';

const buildUser = buildMakeUser({sanitize})

export default buildUser