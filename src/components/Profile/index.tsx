import React from 'react'

import * as Styles from './styles'

const Profile = (): JSX.Element => {
  return (
    <Styles.Container>
      <Styles.UserImage src="https://github.com/alex08g.png" alt="user" />

      <Styles.UserInfo>
        <strong className="name">Alex Araújo</strong>
        <p className="level">
          <img src="assets/icons/level.svg" alt="level" />
          Level 1
        </p>
      </Styles.UserInfo>
    </Styles.Container>
  )
}

export default Profile
