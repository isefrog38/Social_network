import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css';
import {AxiosResponseTypeProfile} from "../../../Reducers-Store/Profile-reducer";
import {RenameSpan} from "../../SmallComponents/RenameSpan/RenameSpanFunction";
import twitter from "../../../Assets/socialIcon/twitter.png";
import Vk from "../../../Assets/socialIcon/mail.png";
import telegram from "../../../Assets/socialIcon/telegram.png";
import facebook from "../../../Assets/socialIcon/facebook.png";
import linkedIn from "../../../Assets/socialIcon/Linked.png";
import git from "../../../Assets/socialIcon/git.png";
import {useParams} from "react-router-dom";

type ProfileInfoType = {
    myId: number | null
    statusTitle: string
    updateStatus: (status: string) => void
    profileState: null | AxiosResponseTypeProfile
    setPhotoProfile: (el: File) => void
}

export const
    LinkedIn = 'https://www.linkedin.com/in/pashka-kuharchik-74b4b722a/',
    Vkontakte = 'https://vk.com/pashkakyharchik',
    Telegram = 'https://t.me/PashkaKuh',
    Facebook = 'https://www.facebook.com/profile.php?id=100005190454942',
    Twitter = 'https://twitter.com/juk_nevyvojuk',
    Git = 'https://github.com/isefrog38',
    defaultAvatar = "https://as2.ftcdn.net/v2/jpg/03/08/68/53/1000_F_308685322_QENNJlJFHONQ8FVP2xVsiez6x1almqo2.jpg";

export const ProfileInfo = ({myId, profileState, updateStatus, statusTitle, setPhotoProfile}: ProfileInfoType) => {

    let {userId} = useParams();

    let state = profileState;

    const onChangePhotoFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            setPhotoProfile(e.target.files[0])
        }
    }

    if (!state) return <></>
    else return (
        <div className={s.main}>
            <div className={s.item}>
                <div className={s.descriptionsBlock}>
                    <div className={s.avatar}>
                        <img className={s.avatar_mini}
                             src={state.photos.large !== null ? state.photos.large : defaultAvatar}
                             alt={state.fullName}/>
                        {userId === ":userId" || userId === `${myId}`
                            ? <input multiple
                                   type={"file"}
                                   onChange={(e) => onChangePhotoFile(e)}
                                   className={s.download_photo}
                            />
                            : <></>
                        }
                    </div>
                    <div className={s.main_n_and_s}>
                        <div className={s.name_and_status_block}>
                            <h1 className={s.full_name}>{state.fullName}</h1>
                            <div className={s.status}>                               {/*status*/}
                                {userId === ":userId" || userId === `${myId}`
                                    ? <RenameSpan statusTitle={statusTitle} setTitle={updateStatus}/>
                                    : <span>{statusTitle}</span>
                                }
                            </div>
                        </div>
                        <div className={s.social_link}>
                            {userId === ":userId" || userId === `${myId}`
                                ?
                                <div className={s.CNBlock}>
                                    <a href={Facebook}><img className={s.socialNetwork} src={facebook}
                                                            alt="facebook"/></a>
                                    <a href={Twitter}><img className={s.socialNetwork} src={twitter} alt="twitter"/></a>
                                    <a href={LinkedIn}><img className={s.socialNetwork} src={linkedIn}
                                                            alt="linkedIn"/></a>
                                    <a href={Telegram}><img className={s.socialNetwork} src={telegram}
                                                            alt="telegram"/></a>
                                    <a href={Vkontakte}><img className={s.socialNetwork} src={Vk} alt="mail"/></a>
                                    <a href={Git}><img className={s.socialNetwork} src={git} alt="git"/></a>
                                </div>
                                :
                                <div className={s.CNBlock}>
                                    <div>{state.contacts.vk}</div>
                                    <div>{state.contacts.github}</div>
                                    <div>{state.contacts.facebook}</div>
                                    <div>{state.contacts.twitter}</div>
                                    <div>{state.contacts.instagram}</div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};