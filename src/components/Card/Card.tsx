import classNames from "classnames";
import "./Card.scss"

export type CardProps = {
    /** URL изображения */
    image: string;
    /** Заголовок карточки */
    title: React.ReactNode;
    /** Подзаголовок карточки */
    subtitle: React.ReactNode;
    /** Содержимое карточки (футер/боковая часть), может быть пустым */
    content?: React.ReactNode;
    /** Клик на карточку */
    onClick?: React.MouseEventHandler;
};

export const Card: React.FC<CardProps> = ({ image, title, subtitle, content, onClick }) => {
    return (
        <div onClick={onClick} className={classNames("card")}>
            <img className={classNames("image")} src={image} alt="card" />
            <div className={classNames("card_container")}>
                <div className={classNames("title")}>{title}</div>
                <div className={classNames("subtitle")}>{subtitle}</div>
                {content !== null && content}
            </div>
        </div >
    );
};

export default Card;