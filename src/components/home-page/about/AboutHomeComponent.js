import React from 'react'
import './AboutHomeComponent.scss'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined'

const AboutHomeComponent = () => {
  return (
    <div className="container">
      <div className="about-block-home">
        <h2>Пельмени и Вареники <span>Ручной лепки</span></h2>
        <p>Приобретая у нас пельмени, вы получаете</p>
        <ul className="arrow-list">
          <li>
            <ArrowForwardIosOutlinedIcon/>
            <span>Питаться едой, в качестве которой можете быть уверенны</span>
          </li>
          <li>
            <ArrowForwardIosOutlinedIcon/>
            <span>Более 20 видов полуфабикатов, собственного производства</span>
          </li>
          <li>
            <ArrowForwardIosOutlinedIcon/>
            <span>Здоровая еда без добавок</span>
          </li>
          <li>
            <ArrowForwardIosOutlinedIcon/>
            <span>Отдельная линия для правильного питания</span>
          </li>
          <li>
            <ArrowForwardIosOutlinedIcon/><span>Ручная лепка</span>
          </li>
          <li>
            <ArrowForwardIosOutlinedIcon/>
            <span>Забота о вашем здоровье</span>
          </li>
        </ul>

        <div className="road-list">
          <h3>Как мы работаем:</h3>
          <ul>

            <li>
              <div className="circle">1</div>
              <div className="strong">Сырьё</div>
              <div className="info-text">
                В состав наших полуфабрикатов входит сертифицированное отборное
                сырье, покупаемое у местных фермеров. Отбор продуктов
                осуществляется строго в соответсвии с современными нормами и
                требованиями качества
              </div>
            </li>

            <li>
              <div className="circle">2</div>
              <div className="strong">Производство</div>
              <div className="info-text">
                Мы тщательно подбираем рецептуру для полуфабрикатов, что бы удовлетворить даже самый взыскательный вкус.
                В
                нашем ассортименте имеются полуфабрикаты как для взрослых, так и для детей, а также линейка продукции
                для
                правильного питания.
              </div>
            </li>

            <li>
              <div className="circle">3</div>
              <div className="strong">Заморозка</div>
              <div className="info-text">
                Для заморозки полуфабрикатов мы используем шоковую заморозку. Наши
                полуфабрикаты имеют строгие условия хранения, благодаря чему вы
                гарантированно получите натуральное и вкусное блюдо.
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutHomeComponent