import {Grid, Tab, Tabs} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import CardBase from '../../components/card'
import CustomSelect from '../../components/select'
import {Campaign} from '../../models/campaign'
import {Categories} from '../../models/categories'
import LayOut from '../layout'
import './Service.css'
import {
  selectCategories,
  selectListCampaignService,
  serviceActions,
} from './serviceSlice'

const Service = () => {
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const [title, setTitle] = useState('전체')
  const dispatch = useAppDispatch()
  const listCampaignService: Campaign[] = useAppSelector(
    selectListCampaignService
  )
  const listTab: Categories[] = useAppSelector(selectCategories)
  useEffect(() => {
    // dispatch(homeActions.getListCampaign())
    dispatch(serviceActions.getListCampaignService(1))
    dispatch(serviceActions.getCategories(1))
  }, [])
  let indexTop = 0
  const styleTab = {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '24px',
    padding: '0.5rem 2rem',
    color: '#000000',
  }
  console.log(6666, listTab)
  return (
    <LayOut>
      <Grid container marginTop='5rem' justifyContent='center'>
        <Grid width='1300px'>
          <Grid
            item
            xs={12}
            container
            // padding='0 3rem'
            alignItems='center'
            justifyContent='space-between'
          >
            <Grid>
              <p className='service-p1'>{title}</p>
            </Grid>
            <Grid
              item
              xs={12}
              container
              justifyContent='space-between'
              borderBottom='1px solid  #E1E1E1'
            >
              <Tabs
                onChange={handleChange}
                value={value}
                aria-label='Tabs where each tab needs to be selected manually'
              >
                {listTab.map((item) => {
                  return (
                    <Tab
                      label={item.text}
                      style={{...styleTab}}
                      onClick={() => {
                        setTitle(item.text)
                      }}
                    />
                  )
                })}
              </Tabs>
              <CustomSelect />
            </Grid>

            {value === 0 ? (
              <>
                <Grid container>
                  {listCampaignService
                    .filter((item) => item.view !== 0)
                    .sort((a, b) => b.view - a.view)
                    .map((item) => {
                      let check = false
                      item.categories?.forEach((itemC) => {
                        if (
                          listTab &&
                          listTab[value] &&
                          listTab[value].id &&
                          itemC.id === listTab[value].id
                        ) {
                          check = true
                        }
                      })

                      if (check) {
                        indexTop++
                        return (
                          <CardBase
                            key={item.id}
                            flag
                            data={item}
                            index={indexTop}
                          />
                        )
                      } else return null
                    })}
                </Grid>

                <Grid item xs={12} container padding='0 0rem 2rem 0rem'>
                  {listCampaignService.map((item) => {
                    let check = false
                    item.categories?.forEach((itemC) => {
                      if (
                        listTab &&
                        listTab[value] &&
                        listTab[value].id &&
                        itemC.id === listTab[value].id
                      ) {
                        check = true
                      }
                    })
                    if (check) {
                      return (
                        <Grid marginRight='0.5rem'>
                          <CardBase
                            key={item.id}
                            width='252px'
                            height='380px'
                            data={item}
                          />
                        </Grid>
                      )
                    } else return null
                  })}
                </Grid>
              </>
            ) : null}

            {value === 1 ? (
              <>
                <Grid item xs={12} container padding='0 0rem 2rem 0rem'>
                  {listCampaignService.map((item) => {
                    let check = false
                    item.categories?.forEach((itemC) => {
                      if (
                        listTab &&
                        listTab[value] &&
                        listTab[value].id &&
                        itemC.id === listTab[value].id
                      ) {
                        check = true
                      }
                    })
                    if (check) {
                      return (
                        <Grid marginRight='0.5rem'>
                          <CardBase
                            key={item.id}
                            width='252px'
                            height='380px'
                            data={item}
                          />
                        </Grid>
                      )
                    } else return null
                  })}
                </Grid>
              </>
            ) : null}
            {value === 2 ? (
              <>
                <Grid item xs={12} container padding='0 0rem 2rem 0rem'>
                  {listCampaignService.map((item) => {
                    let check = false
                    item.categories?.forEach((itemC) => {
                      if (
                        listTab &&
                        listTab[value] &&
                        listTab[value].id &&
                        itemC.id === listTab[value].id
                      ) {
                        check = true
                      }
                    })
                    if (check) {
                      return (
                        <Grid marginRight='0.5rem'>
                          <CardBase
                            key={item.id}
                            width='252px'
                            height='380px'
                            data={item}
                          />
                        </Grid>
                      )
                    } else return null
                  })}
                </Grid>
              </>
            ) : null}
            {value === 3 ? (
              <>
                <Grid item xs={12} container padding='0 0rem 2rem 0rem'>
                  {listCampaignService.map((item) => {
                    let check = false
                    item.categories?.forEach((itemC) => {
                      if (
                        listTab &&
                        listTab[value] &&
                        listTab[value].id &&
                        itemC.id === listTab[value].id
                      ) {
                        check = true
                      }
                    })
                    if (check) {
                      return (
                        <Grid marginRight='0.5rem'>
                          <CardBase
                            key={item.id}
                            width='252px'
                            height='380px'
                            data={item}
                            disableMargin
                          />
                        </Grid>
                      )
                    } else return null
                  })}
                </Grid>
              </>
            ) : null}
            {value === 4 ? (
              <>
                <Grid item xs={12} container padding='0 0rem 2rem 0rem'>
                  {listCampaignService.map((item) => {
                    let check = false
                    item.categories?.forEach((itemC) => {
                      if (
                        listTab &&
                        listTab[value] &&
                        listTab[value].id &&
                        itemC.id === listTab[value].id
                      ) {
                        check = true
                      }
                    })
                    if (check) {
                      return (
                        <Grid marginRight='0.5rem'>
                          <CardBase
                            disableMargin
                            key={item.id}
                            width='252px'
                            height='380px'
                            data={item}
                          />
                        </Grid>
                      )
                    } else return null
                  })}
                </Grid>
              </>
            ) : null}
            {value === 5 ? (
              <>
                <Grid item xs={12} container padding='0 0rem 2rem 0rem'>
                  {listCampaignService.map((item) => {
                    let check = false
                    item.categories?.forEach((itemC) => {
                      if (
                        listTab &&
                        listTab[value] &&
                        listTab[value].id &&
                        itemC.id === listTab[value].id
                      ) {
                        check = true
                      }
                    })
                    if (check) {
                      return (
                        <Grid marginRight='0.5rem'>
                          <CardBase
                            disableMargin
                            key={item.id}
                            width='252px'
                            height='380px'
                            data={item}
                          />
                        </Grid>
                      )
                    } else return null
                  })}
                </Grid>
              </>
            ) : null}
            {value === 6 ? (
              <>
                <Grid item xs={12} container padding='0 0rem 2rem 0rem'>
                  {listCampaignService.map((item) => {
                    let check = false
                    item.categories?.forEach((itemC) => {
                      if (
                        listTab &&
                        listTab[value] &&
                        listTab[value].id &&
                        itemC.id === listTab[value].id
                      ) {
                        check = true
                      }
                    })
                    if (check) {
                      return (
                        <Grid marginRight='0.5rem'>
                          <CardBase
                            disableMargin
                            key={item.id}
                            width='252px'
                            height='380px'
                            data={item}
                          />
                        </Grid>
                      )
                    } else return null
                  })}
                </Grid>
              </>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </LayOut>
  )
}

export default Service
