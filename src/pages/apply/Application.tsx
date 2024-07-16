import { css } from '@styled-stytem/css'
import { useParams } from 'react-router-dom'

import PersonalInfo from '@/components/apply/PersonalInfo'
import Button from '@/components/ui/button'
import { Track } from '@/types/track'

type TrackConfigType = {
  [key in Track]: string
}
const trackConfig: TrackConfigType = {
  FE: 'Front-End 프론트엔드 개발자',
  BE: 'Back-End 백엔드 개발자',
  PM: 'Peroject Manager 프로젝트 매니저',
  DE: 'Designer 디자이너'
}

const Application = () => {
  const { track } = useParams()
  const trackTitle = trackConfig[track as Track]
  return (
    <section
      className={css({
        display: 'flex',
        w: 'full',
        h: '100vh',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 310,
        gap: 45
      })}
    >
      <div className={css({ display: 'flex', width: 'full', flexDir: 'column', alignItems: 'center', gap: 85 })}>
        <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', gap: 2.5 })}>
          <h1 className={css({ fontSize: 48, fontWeight: 700, color: 'label.50' })}>지원서 작성하기</h1>
          <h2 className={css({ fontSize: 20, fontWeight: 500, color: 'label.80' })}>{trackTitle}</h2>
        </div>
      </div>
      <PersonalInfo />
      <Button variant="gray" disabled={!track} className={css({ display: 'flex', alignSelf: 'flex-end' })}>
        다음
      </Button>
    </section>
  )
}

export default Application
