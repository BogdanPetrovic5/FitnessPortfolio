import BB from './images/BB.jpg'
import PL from './images/PL.jpg'
import PB from './images/PB.jpg'
import { useTranslation } from 'react-i18next'
function WorkoutTypes(){
    const {t} = useTranslation()
    return(
   <div className='Workout-Types' id='Workout-Details'>
                            <div className='Workout-Types-Description'>
                                <div className='Workout-Types-Title'>
                                    <h1 className='Decoration-Titles'>{t('workoutTypes.title')}</h1>
                                </div>
                                <h1 className='Workout-Types-Title-h1'>
                                    {t('workoutTypes.subTitle.text')}<span> {t('workoutTypes.subTitle.span')}</span> 
                                </h1>
                            </div>
                            <div className='Workout-Types-Card-Wrap'>
                                <div className='Workout-Type-Card' style={{ backgroundImage: `url(${BB})` }}>
                                    <h1>
                                        Bodybuilding
                                    </h1>
                                    <div className='Workout-Card-Descirption'>
                                        <p>
                                            {t('workoutTypes.bodybuilding.description')}
                                        </p>
                                    </div>
                                </div>
                                <div className='Workout-Type-Card' style={{ backgroundImage: `url(${PB})` }}>
                                    <h1>
                                        Powerbuilding
                                    </h1>
                                    <div className='Workout-Card-Descirption'>
                                        <p>
                                        {t('workoutTypes.powerbuilding.description')}
                                        </p>
                                    </div>
                                </div>
                                <div className='Workout-Type-Card' style={{ backgroundImage: `url(${PL})` }}>
                                    <h1>
                                        Powerlifting
                                    </h1>
                                    <div className='Workout-Card-Descirption'>
                                        <p>
                                        {t('workoutTypes.powerlifting.description')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}export default WorkoutTypes