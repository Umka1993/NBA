import s from '../styleInput.module.scss';
import React, { useEffect, useState } from 'react';
import loadPhoto from 'assets/icon/loadPhoto.png';
import { IInputPhoto } from 'types/formTypes';
import { useDropzone } from 'react-dropzone';

export const InputLoadPhoto = <T, L>({
  register,
  name,
  value,
  getPicture,
}: IInputPhoto): JSX.Element => {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string | null>();

  const { getRootProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      acceptedFiles.map((files) => setImage(files));
    },
  });
  const getFile = (file: File): void => {
    if (file) {
      setImage(file);
      getPicture(file);
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <div className={s.inputBlock}>
      <label htmlFor={name} className={s.labelPhoto}>
        <div
          className={s.photoBlock}
          {...getRootProps()}
          style={
            preview
              ? {
                  background: `url(${preview !== '' ? preview : ''})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }
              : {}
          }
        >
          <img src={loadPhoto} alt="Add photo team" />
        </div>
      </label>

      <div className={s.inputWrap}>
        <input
          {...register(name, { required: 'This is required.' })}
          id={name}
          type="file"
          value={value}
          className={s.inputPhoto}
          accept="image/png, image/gif, image/jpeg"
          onChange={(event) => {
            const target = event.target as HTMLInputElement;
            const file: File = (target.files as FileList)[0];
            getFile(file);
          }}
        />
      </div>
    </div>
  );
};
