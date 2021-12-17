import s from '../styleInput.module.scss';
import React, { useEffect, useState } from 'react';
import loadPhoto from 'assets/icon/loadPhoto.png';
import { IInputProps } from '../../../types';
import { useDropzone } from 'react-dropzone';

export const InputLoadPhoto = <T, L>({ register, name, value }: IInputProps<T, L>): JSX.Element => {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string | null>();

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      acceptedFiles.map((files) => setImage(files));
    },
  });
  const getFile = (file: File): void => {
    if (file) {
      setImage(file);
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
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
          value={value}
          type="file"
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
