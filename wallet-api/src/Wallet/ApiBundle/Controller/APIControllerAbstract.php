<?php

namespace Wallet\ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class APIControllerAbstract extends Controller
{

    /**
     * OPTIONS
     *
     * @Route("/")
     * @Method({"OPTIONS"})
     */
    public function optionsAction(Request $request)
    {
        $response = new Response('', Response::HTTP_OK, array(
            'Access-Control-Allow-Origin' => "*",
            'Access-Control-Allow-Methods' => "GET, POST, PUT, DELETE, OPTIONS",
            'Access-Control-Allow-Headers' => $request->headers->get('access-control-request-headers'),
        ));

        return $response;
    }

    /**
     * Parse data from request into json.
     *
     * @param Request $request
     *
     * @return array Assoc array
     */
    protected function getJsonFromRequest(Request $request)
    {
        try {
            $input = file_get_contents('php://input');;
            $json = json_decode($input, 1);
        } catch (\Exception $e) {
            $json = [];
        }

        return $json;
    }

    /**
     * Fill entity fields with provided array.
     *
     * @param $entity
     * @param array $data
     */
    protected function populateEntityFromArray($entity, array $data)
    {
        foreach ($data as $property => $value) {
            $method = "set{$property}";
            if (method_exists($entity, $method)) {
                $entity->$method($value);
            }
        }
    }

    /**
     * Validate entity and return assoc array with errors.
     *
     * @param $entity
     *
     * @return array
     */
    protected function validateEntity($entity)
    {
        $validator = $this->get('validator');
        $errors = $validator->validate($entity);
        $messages = [];
        if (count($errors) > 0) {
            foreach ($errors as $violation) {
                $messages[$violation->getPropertyPath()] = $violation->getMessage();
            }
        }

        return $messages;
    }

    /**
     * Create error response
     *
     * @param array $errors
     *
     * @return JsonResponse
     */
    protected function errorResponse(array $errors)
    {
        return $this->json([
            'success' => false,
            'errors' => $errors
        ]);
    }

    /**
     * Create success response
     *
     * @param array $data
     *
     * @return JsonResponse
     */
    protected function successResponse(array $data)
    {
        return $this->json([
            'success' => true,
            'data' => $data
        ]);
    }
}
