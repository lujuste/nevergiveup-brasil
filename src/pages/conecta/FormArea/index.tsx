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
  Select,
  Icon,
  Text,
  useBreakpointValue,
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
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    xl: false,
  });

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
    cidade: yup.string().required('Seu estado é obrigatório'),
    bairro: yup.string().required('Seu estado é obrigatório'),
    instagram: yup.string(),
    eleicoes: yup.string(),
    anodisputado: yup.string(),
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit: SubmitHandler<InputProps> = async data => {
    console.log(data);
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
        borderRadius={['0', '0', '28px']}
        flexDir="column"
        boxShadow="dark-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        {isMobile ? (
          <Heading mt="2rem" color="white" mx="auto">
            Inscreva-se!
          </Heading>
        ) : (
          <Heading
            color="white"
            fontFamily="Public Sans"
            fontSize={['32px', '32px', '50px', '60px']}
            mt={['2rem', '2rem', '5rem']}
            mx="auto"
            maxW="600px"
          >
            Inscreva-se!
          </Heading>
        )}

        <Text mt="2rem" color="white" ml="3rem">
          Dados cadastrais:
        </Text>

        <Grid
          mt="2rem"
          px="2rem"
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
          ]}
          gap={7}
        >
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
              label="Data de nascimento"
              {...register('date')}
              error={errors.date}
              _hover={{ bgColor: 'white' }}
            />
          </GridItem>
          <GridItem>
            <Input
              name="text"
              {...register('cidade')}
              label="Sua cidade"
              error={errors.cidade}
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
          <GridItem>
            <Input
              name="text"
              label="Seu instagram"
              {...register('instagram')}
              error={errors.instagram}
              _hover={{ bgColor: 'white' }}
            />
          </GridItem>
        </Grid>
        <Text mt="2rem" color="white" ml="3rem">
          Informações gerais:
        </Text>
        <Grid px="2rem" templateColumns="repeat(1, fr)" mt="1rem">
          <GridItem mt="1rem">
            <Select
              name="eleicoes"
              id="eleicoes"
              color="black"
              {...register('eleicoes')}
              error={errors.eleicoes}
              bgColor="white"
              placeholder="Já disputou eleições?"
            >
              <option value="yes">Sim</option>
              <option value="no">Não</option>
            </Select>
          </GridItem>
          <GridItem>
            <Input
              mt="1rem"
              name="text"
              label="Se sim, qual ano?"
              {...register('anodisputado')}
              error={errors.anodisputado}
              _hover={{ bgColor: 'white' }}
            />
          </GridItem>
          <GridItem mt="1rem">
            <Select
              id="lider"
              name="lider"
              color="black"
              bgColor="white"
              placeholder="É lider comunitária ou dirigente?"
              {...register('lider')}
              error={errors.lider}
            >
              <option value="yes">Sim</option>
              <option value="no">Não</option>
            </Select>
          </GridItem>
          <GridItem>
            <Input
              mt="1rem"
              name="text"
              label="Se sim, qual organização?"
              {...register('organization')}
              error={errors.organization}
              _hover={{ bgColor: 'white' }}
            />
          </GridItem>
          <GridItem mt="1rem">
            <Select
              name="candidato"
              id="candidato"
              {...register('candidato')}
              error={errors.candidato}
              color="black"
              bgColor="white"
              placeholder="Pretende disputar as eleições?"
            >
              <option value="yes">Sim</option>
              <option value="no">Não</option>
            </Select>
          </GridItem>
          <GridItem>
            <Input
              mt="1rem"
              name="text"
              label="Se sim, qual cargo?"
              {...register('cargo')}
              error={errors.cargo}
              _hover={{ bgColor: 'white' }}
            />
          </GridItem>
          <GridItem mt="1rem">
            <Select
              name="filiada"
              id="filiada"
              {...register('filiada')}
              error={errors.filiada}
              color="black"
              bgColor="white"
              placeholder="É filiada a algum partido?"
            >
              <option value="yes">Sim</option>
              <option value="no">Não</option>
            </Select>
          </GridItem>

          <GridItem>
            <Input
              mt="1rem"
              name="partido"
              label="Se sim, qual partido?"
              {...register('partido')}
              error={errors.partido}
              _hover={{ bgColor: 'white' }}
            />
          </GridItem>

          <GridItem mt="1rem">
            <Select
              id="cor"
              name="cor"
              color="black"
              bgColor="white"
              placeholder="Considera-se:"
              {...register('cor')}
              error={errors.cor}
            >
              <option value="branca">Branca</option>
              <option value="parda">Parda</option>
              <option value="preta">Preta</option>
              <option value="amarela">Amarela</option>
              <option value="indígena">Indígena</option>
            </Select>
          </GridItem>

          <GridItem mt="1rem">
            <Select
              id="genero"
              name="genero"
              color="black"
              bgColor="white"
              {...register('genero')}
              error={errors.genero}
              placeholder="Identidade de gênero:"
            >
              <option value="cisgenero">Cisgênero</option>
              <option value="transgenero">Transgênero</option>
              <option value="queer">Queer (não-binário)</option>
            </Select>
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