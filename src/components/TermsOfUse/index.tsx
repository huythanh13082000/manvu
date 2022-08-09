import {Button, Checkbox, Grid} from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom'

const TermsOfUse = () => {
  const navigate = useNavigate()
  const label = {inputProps: {'aria-label': 'Checkbox demo'}}
  const handleSubmit = () => {
    navigate('/register')
  }
  return (
    <Grid container justifyContent='center'>
      <Grid container justifyContent='center' item xs={12}>
        <Grid width='1200px'>
          <p style={{fontWeight: 700, fontSize: '24px', lineHeight: '32px'}}>
            이용약관
          </p>
        </Grid>
      </Grid>
      <Grid container width='1200px' spacing={2}>
        <Grid item xs={6}>
          <p
            style={{
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '18px',
              lineHeight: '155%',
            }}
          >
            1. 이용약관 동의
          </p>
          <Grid
            border='1px solid #707070'
            borderRadius='5px'
            height='530px'
            padding='1.5rem'
            fontWeight='400'
            fontSize='14px'
            lineHeight='24.5px'
            left='0.1px'
            overflow='auto'
          >
            정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는
            헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에
            의하여 해산된다. 군인은 현역을 면한 후가 아니면 국무위원으로 임명될
            수 없다. 국가는 법률이 정하는 바에 의하여 재외국민을 보호할 의무를
            진다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한
            압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을
            제시하여야 한다. 선거운동은 각급 선거관리위원회의 관리하에 법률이
            정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 혼인과
            가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고 유지되어야
            하며, 국가는 이를 보장한다. 저작자·발명가·과학기술자와 예술가의
            권리는 법률로써 보호한다. 모든 국민은 학문과 예술의 자유를 가진다.
            대법원장과 대법관이 아닌 법관은 대법관회의의 동의를 얻어 대법원장이
            임명한다. 국가는 농업 및 어업을 보호·육성하기 위하여
            농·어촌종합개발과 그 지원등 필요한 계획을 수립·시행하여야 한다.
            국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며,
            국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다. 정당의
            목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에
            그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여
            해산된다. 군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수
            없다. 국가는 법률이 정하는 바에 의하여 재외국민을 보호할 의무를
            진다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한
            압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을
            제시하여야 한다. 선거운동은 각급 선거관리위원회의 관리하에 법률이
            정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 혼인과
            가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고 유지되어야
            하며, 국가는 이를 보장한다. 저작자·발명가·과학기술자와 예술가의
            권리는 법률로써 보호한다. 모든 국민은 학문과 예술의 자유를 가진다.
            대법원장과 대법관이 아닌 법관은 대법관회의의 동의를 얻어 대법원장이
            임명한다. 국가는 농업 및 어업을 보호·육성하기 위하여
            농·어촌종합개발과 그 지원등 필요한 계획을 수립·시행하여야 한다.
            국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며,
            국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다.
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <p
            style={{
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '18px',
              lineHeight: '155%',
            }}
          >
            2. 개인정보 수집 및 이용
          </p>
          <Grid
            border='1px solid #707070'
            borderRadius='5px'
            height='530px'
            padding='1.5rem'
            fontWeight='400'
            fontSize='14px'
            lineHeight='24.5px'
            left='0.1px'
            overflow='auto'
          >
            정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는
            헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에
            의하여 해산된다. 군인은 현역을 면한 후가 아니면 국무위원으로 임명될
            수 없다. 국가는 법률이 정하는 바에 의하여 재외국민을 보호할 의무를
            진다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한
            압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을
            제시하여야 한다. 선거운동은 각급 선거관리위원회의 관리하에 법률이
            정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 혼인과
            가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고 유지되어야
            하며, 국가는 이를 보장한다. 저작자·발명가·과학기술자와 예술가의
            권리는 법률로써 보호한다. 모든 국민은 학문과 예술의 자유를 가진다.
            대법원장과 대법관이 아닌 법관은 대법관회의의 동의를 얻어 대법원장이
            임명한다. 국가는 농업 및 어업을 보호·육성하기 위하여
            농·어촌종합개발과 그 지원등 필요한 계획을 수립·시행하여야 한다.
            국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며,
            국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다. 정당의
            목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에
            그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여
            해산된다. 군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수
            없다. 국가는 법률이 정하는 바에 의하여 재외국민을 보호할 의무를
            진다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한
            압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을
            제시하여야 한다. 선거운동은 각급 선거관리위원회의 관리하에 법률이
            정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 혼인과
            가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고 유지되어야
            하며, 국가는 이를 보장한다. 저작자·발명가·과학기술자와 예술가의
            권리는 법률로써 보호한다. 모든 국민은 학문과 예술의 자유를 가진다.
            대법원장과 대법관이 아닌 법관은 대법관회의의 동의를 얻어 대법원장이
            임명한다. 국가는 농업 및 어업을 보호·육성하기 위하여
            농·어촌종합개발과 그 지원등 필요한 계획을 수립·시행하여야 한다.
            국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며,
            국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다.
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          justifyContent='space-between'
          justifyItems='center'
          margin='1.5rem 0'
        >
          <p>
            <Checkbox
              {...label}
              defaultChecked
              color='success'
              style={{margin: 0, padding: 0, color: '#03CB5E'}}
            />
            <span
              style={{
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '155%',
                letterSpacing: '0.1px',
              }}
            >
              이용약관, 개인정보 수집 및 이용에 모두 동의합니다
            </span>
          </p>
          <Button
            onClick={handleSubmit}
            style={{
              width: '143px',
              height: '56px',
              boxShadow: ' 0px 4px 12px -4px #4C98ED',
              fontSize: '15px',
              fontWeight: '700',
            }}
            variant='contained'
          >
            계속하기
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TermsOfUse
