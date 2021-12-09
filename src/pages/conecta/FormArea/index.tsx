import { Input } from '../../../shared/components/Form/Input';
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  Spinner,
  Icon,
  Text,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useState } from 'react';

import { CheckCircleIcon } from '@chakra-ui/icons';

import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { toast } from 'react-toastify';

interface InputProps {
  name: string;
  email?: string;
  errors?: FieldError;
}

export default function FormArea() {
  function toastSucess() {
    toast.success('Sucesso! Obrigado pelo contato.', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }

  function tostFailure() {
    toast.error('Este email já está cadastrado!', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }

  const [loading, setLoading] = useState(false);
  const [shouldOpen, setShouldOpen] = useState(false);

  const formSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório.'),
    email: yup.string().required('Email obrigatório.').email('Email inválido.'),
    whatsapp: yup
      .number()
      .typeError('Deve ser um número')
      .required('Whatsapp é obrigatório.'),
    cpf: yup.string().required('CPF é obrigatório'),
    date: yup
      .date()
      .required('Data de nascimento obrigatória')
      .typeError('Insira uma data'),
    estado: yup.string().required('Seu estado é obrigatório'),
    bairro: yup.string().required('Seu estado é obrigatório'),
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit: SubmitHandler<InputProps> = async data => {
    try {
      setLoading(true);
      await fetch('/api/getUsers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => console.log(response))
        .then(toastSucess)
        .then(onOpen)
        .catch(error => {
          console.log(error);
          tostFailure();
        });

      setLoading(false);
    } catch (err) {
      console.log(err);
      tostFailure();
    }
  };

  return (
    <Flex
      pb="4rem"
      w="100%"
      h="100%"
      mx="auto"
      justify="center"
      bgColor="#E5E5E5"
    >
      <Flex
        as="form"
        mx="auto"
        w="1000px"
        h="100%"
        pb="2rem"
        bgColor="#912B78"
        sx={{
          filter: 'blur',
        }}
        borderRadius="28px"
        flexDir="column"
        boxShadow="dark-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading
          color="white"
          fontFamily="Public Sans"
          fontSize="60px"
          mt="5rem"
          mx="auto"
        >
          Inscreva-se!
        </Heading>

        <Grid mt="2rem" px="2rem" templateColumns="repeat(2, 1fr)" gap={7}>
          <GridItem>
            <Input
              name="name"
              label="Seu nome"
              {...register('name')}
              error={errors.name}
              _hover={{ bgColor: 'white' }}
            />
          </GridItem>
          <GridItem>
            <Input
              name="email"
              label="Seu email"
              {...register('email')}
              error={errors.email}
              _hover={{ bgColor: 'white' }}
            />
          </GridItem>
          <GridItem>
            <Input
              name="number"
              label="Seu WhatsApp"
              {...register('whatsapp')}
              error={errors.whatsapp}
              _hover={{ bgColor: 'white' }}
            />
          </GridItem>
          <GridItem>
            <Input
              name="number"
              label="Seu CPF"
              {...register('cpf')}
              error={errors.cpf}
              _hover={{ bgColor: 'white' }}
            />
          </GridItem>
          <GridItem>
            <Input
              name="date"
              textColor="#fff"
              label="Sua data de nascimento"
              error={errors.date}
              {...register('date')}
              _hover={{ bgColor: 'white' }}
            />
          </GridItem>
          <GridItem>
            <Input
              name="text"
              {...register('estado')}
              label="Seu estado"
              error={errors.estado}
              _hover={{ bgColor: 'white' }}
            />
          </GridItem>
          <GridItem>
            <Input
              name="text"
              label="Seu bairro"
              {...register('bairro')}
              error={errors.bairro}
              _hover={{ bgColor: 'white' }}
            />
          </GridItem>
        </Grid>
        <Button
          mt="1.5rem"
          mx="auto"
          color="white"
          bgColor="#340B77"
          w="193px"
          h="54px"
          type="submit"
          border="solid 1px white"
          _hover={{
            color: '#912B78',
            bgColor: 'white',
            border: 'solid 1px #340B77 ',
          }}
        >
          {loading ? <Spinner /> : 'Enviar!'}
        </Button>
      </Flex>

      <Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            py="2rem"
            color="white"
            bgColor="#340B77"
            maxW="600px"
            w="100%"
            h={['600px', '800px', '600px', '500px']}
            mx={['1rem', '1rem', 'auto']}
          >
            <ModalHeader
              fontFamily="Public Sans"
              fontSize="32px"
              mt="5rem"
              mx="auto"
            >
              <Flex align="center" mt="-4rem" flexDir="column">
                <Icon color="#912B78" boxSize="70px" as={CheckCircleIcon} />
                <Text bgColor="#912B78" px="2rem" mt="2rem">
                  Parabéns!
                </Text>
              </Flex>
            </ModalHeader>
            <ModalCloseButton align="center" />
            <ModalBody>
              <Text px="2rem" fontFamily="Roboto" textAlign="center">
                Você concluiu a sua inscrição no processo de seleção da primeira
                turma da <strong>CONECTA.</strong> Nosso time fará uma avaliação
                dos critérios de participação e entrará em contato com você até
                <strong>
                  11/01/2022 para confirmar a sua participação.
                </strong>{' '}
                Lugar de mulher é onde ela quiser,{' '}
                <strong>inclusive na política!</strong>
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button bgColor="#912B78" mr={3} onClick={onClose}>
                Voltar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
}
